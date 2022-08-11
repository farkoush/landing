// InfiniteScroll.js

import { useInfiniteQuery } from 'react-query'
import UserCard from './UserCard';


const fetchUsers = async ({ pageParam = 1 }) => {
    const res = await fetch(`https://randomuser.me/api/?page=${pageParam}&results=10`);
    return res.json();
}

const InfiniteScroll = () => {


    const {
        isLoading,
        isError,
        error,
        data,
        fetchNextPage,
        isFetching,
        isFetchingNextPage
    } = useInfiniteQuery(['colors'], fetchUsers, {
        getNextPageParam: (lastPage, pages) => {
            return lastPage.info.page + 1
        }
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            <h2>Infinite Scroll View</h2>
            <div className="card">
                {data.pages.map(page =>
                    page.results.map(user => <UserCard key={user.id} item={user} />)
                )}
            </div>
            <div className='btn-container'>
                <button onClick={fetchNextPage}>Load More</button>
            </div>
            <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
    )
}

export default InfiniteScroll;