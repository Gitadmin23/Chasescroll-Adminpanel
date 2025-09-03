import React from 'react'

interface IProps {
    children: React.ReactNode;
    loading: boolean;
    refetching?: boolean;
    length?: number
}

export default function LoadingAnimation({ children, loading, length }: IProps) {
    return (
        <>
            {(!loading) && (
                <> 
                    {length === 0 ? (
                        <div className=' w-full flex justify-center py-3 ' >
                            <p className=' font-semibold ' >No Records Found</p>
                        </div>
                    ) : ( 
                        <div className=' w-full ' >
                            {children}
                        </div>
                    )}
                </>
            )}
            {loading && (
                <div className=' w-full flex py-8 justify-center items-center text-gray-900 text-lg font-bold ' >
                    Loading...
                </div>
            )}
        </>
    )
}
