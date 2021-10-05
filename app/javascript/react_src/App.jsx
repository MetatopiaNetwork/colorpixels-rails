import React from 'react';
import WatchPage from "./pages/WatchPage";
import PageLayout from "./layouts/PageLayout";
import {EthContextProvider} from "./providers/EthContextProvider";

function App() {

    return (
        <>
            <>
                <EthContextProvider>
                    <PageLayout>
                        <WatchPage/>
                    </PageLayout>
                </EthContextProvider>
            </>
        </>
    )
}

export default App;