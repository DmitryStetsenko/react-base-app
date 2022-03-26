import { useMemo } from "react";

export const useSortedPost = (posts, sort) => {
    const sortedPost = useMemo(() => {
		console.log('sorted')
		if (sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
		}
		return posts;
	}, [sort, posts]);

    return sortedPost;
}

export const usePost = (post, sort, query) => {
    const sortedPost = useSortedPost(post, sort);

    const sortedAndSearchPost = useMemo(() => {
		return sortedPost.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));
	}, [query, sortedPost]);

    return sortedAndSearchPost;
}