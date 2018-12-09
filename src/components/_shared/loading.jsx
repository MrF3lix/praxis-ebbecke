import React, { Suspense } from 'react'
import { Logo } from './icons'
import { CSSTransition } from 'react-transition-group'

const LoadingContainer = () => (
    <div className="loading__container">
        <Logo />
    </div>
)

const Loading = ({ isLoading, children }) => (
    <React.Fragment>
        <Suspense fallback={<LoadingContainer />}>
            {/* <CSSTransition
                in={isLoading}
                classNames={'loading'}
                timeout={1000}
                unmountOnExit
            >
                <LoadingContainer />
            </CSSTransition> */}
            {children}
        </Suspense>
    </React.Fragment>
)

export default Loading