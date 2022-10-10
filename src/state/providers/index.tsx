import { DialogWindowProvider } from "./dialogWindowProvider";
import { MapOverlayWindowProvider } from "./mapOverlayWindowProvider";
import { MapProvider } from "./mapProvider";
import { MarkerProvider } from "./markerProvider";
import { ProfileProvider } from "./profileProvider";
import { SettingsProvider } from "./settingsProvider";
import { ThemeProvider } from "./themeProvider";

interface ProvidersInterface {
  children: any;
}

export const StateProviders = ({ children }: ProvidersInterface) => (
  <ThemeProvider>
    <SettingsProvider>
      <ProfileProvider>
        <MarkerProvider>
          <MapProvider>
            <MapOverlayWindowProvider>
              <DialogWindowProvider>{children}</DialogWindowProvider>
            </MapOverlayWindowProvider>
          </MapProvider>
        </MarkerProvider>
      </ProfileProvider>
    </SettingsProvider>
  </ThemeProvider>
);
