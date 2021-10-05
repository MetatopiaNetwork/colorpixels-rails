import React from 'react';
import WatchPage from "./pages/WatchPage";
import PageLayout from "./layouts/PageLayout";
import {EthContextProvider} from "./providers/EthContextProvider";
import {ClipContextProvider} from "./providers/ClipContextProvider";
import {EventInfoProvider} from "./providers/EventInfoProvider";
import InjectProviders from "./providers/InjectProviders";

function App() {

    return (
        <>
            <>
                <InjectProviders>
                    <PageLayout>
                        <WatchPage/>
                    </PageLayout>
                </InjectProviders>
            </>
        </>
    )
}

export default App;