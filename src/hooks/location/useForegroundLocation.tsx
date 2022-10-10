import * as Location from "expo-location";
import { useEffect, useState } from "react";

let foregroundSubscription: Location.LocationSubscription | null = null;

export const useForegroundLocation = () => {
  // Define position state: {latitude: number, longitude: number}
  const [location, setLocation] = useState<Location.LocationObjectCoords>();

  // Request permissions right after starting the app
  useEffect(() => {
    const requestPermissions = async () => {
      const foreground = await Location.requestForegroundPermissionsAsync();
      if (foreground.granted) {
        await startForegroundUpdate();
      }
    };
    requestPermissions();
  }, []);

  const startForegroundUpdate = async () => {
    // Check if foreground permission is granted
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      console.log("Foreground location tracking denied!");
      return;
    }

    foregroundSubscription?.remove();
    foregroundSubscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
      },
      (location) => {
        setLocation(location.coords);
      }
    );
  };

  const stopForegroundUpdate = () => {
    foregroundSubscription?.remove();
    setLocation(null);
  };

  return { location };
};
