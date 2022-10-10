import { Base } from "./src/base";
import { StateProviders } from "./src/state/providers";
import { Theme } from "./src/theme/theme";

export default function App() {
  return (
    <StateProviders>
      <Theme>
        <Base />
      </Theme>
    </StateProviders>
  );
}
