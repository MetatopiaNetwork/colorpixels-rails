import React from 'react';
import WatchPage from "./pages/WatchPage";
import PageLayout from "./layouts/PageLayout";
import {GlobalContextProvider} from "./GlobalContextProvider";

function App() {

    return (
        <>
            <>
                <GlobalContextProvider>
                    <PageLayout>
                        <WatchPage/>
                    </PageLayout>
                </GlobalContextProvider>
            </>
        </>
    )
}

export default App;