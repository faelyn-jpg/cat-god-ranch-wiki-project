import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import * as API from '../apis/textContent.ts'
import { getAllTextContent, getTextContent } from '../apis/textContent.ts'

export function useAllTextContent() {
  const query = useQuery({
    queryKey: ['textContents'],
    //change above?
    queryFn: () => getAllTextContent(),
  })
  return {
    ...query,
    add: useAddTextContent(),
  }
}

export function useTextContent(id: number | string) {
  const query = useQuery({
    queryKey: ['textContent'],
    queryFn: () => getTextContent(id),
  })
  return {
    ...query,
  }
}

export function useTextContentMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] })
    },
  })

  return mutation
}

export function useAddTextContent() {
  return useTextContentMutation(API.addTextContent)
}
