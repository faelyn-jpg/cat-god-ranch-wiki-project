import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import * as API from '../apis/articles.ts'
import { getArticles, getArticle } from '../apis/articles.ts'

export function useArticles() {
  const query = useQuery({
    queryKey: ['articles'],
    queryFn: () => getArticles(),
  })
  return {
    ...query,
    add: useAddArticle(),
  }
}

export function useArticle(id: number | string) {
  const query = useQuery({
    queryKey: ['article'],
    queryFn: () => getArticle(id),
  })
  return {
    ...query,
  }
}

export function useArticleMutation<TData = unknown, TVariables = unknown>(
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

export function useAddArticle() {
  return useArticleMutation(API.addArticle)
}

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
