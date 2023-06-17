import { useApi, useAccount } from '@gear-js/react-hooks';
import { Routing } from 'pages';
import { Header, Footer, ApiLoader } from 'components';
import { withProviders } from 'hocs';
import 'App.scss';
import { UnityCanvas } from 'components/unity-componentes/UnityCanvas';
import { ReadState } from "./components/sc-components/ReadState";

function Component() {
  const { isApiReady } = useApi();
  const { isAccountReady } = useAccount();

  return (
    <>
        <div className="background">
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
        </div>/
      <Header isAccountVisible={isAccountReady} />
        <div className="aplicationContainer">
            <UnityCanvas />
            <main className="marketPlaceContainer">{isApiReady && isAccountReady ? <Routing /> : <ApiLoader />}</main>
            <ReadState/>
        </div>
    </>
  );
}

export const App = withProviders(Component);
