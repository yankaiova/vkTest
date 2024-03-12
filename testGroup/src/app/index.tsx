import {
  usePlatform,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
} from "@vkontakte/vkui";
import { Page } from "../pages";

function App() {
  const platform = usePlatform();
  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
      >
        <SplitCol autoSpaced>
          <View activePanel="list">
            <Panel id="list">
              <PanelHeader>Список групп</PanelHeader>
              <Page />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

export default App;
