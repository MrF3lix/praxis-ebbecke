import React, { Suspense } from 'react'
import { Logo } from './icons'

const LoadingContainer = () => (
    <div className="loading__container">
        <Logo />
    </div>
)

const Loading = ({ isLoaded, children }) => (
    <React.Fragment>
        <Suspense fallback={<LoadingContainer />}>
            {!isLoaded &&
                <LoadingContainer />
            }
            {children}
        </Suspense>
    </React.Fragment>
)

export default Loading