import React from 'react';
import WatchPage from "./pages/WatchPage";
import PageLayout from "./layouts/PageLayout";
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