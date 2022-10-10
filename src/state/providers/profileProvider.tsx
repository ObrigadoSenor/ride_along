import { createContext, useState } from "react";

interface ProfileDataInterface {
  firstName: string;
  surName: string;
  email: string;
  phoneNumber: string;
  address: {
    street: string;
    streetNr: string;
    zipCode: string;
    county: string;
    country: string;
  };
}

export interface ProfileContextInterface {
  profileData: ProfileDataInterface;
  setProfileData: (d: ProfileDataInterface) => void;
}

const initProfileData: ProfileDataInterface = {
  firstName: "Johan",
  surName: "Sjöberg",
  email: "test@test.com",
  phoneNumber: "+46763112233",
  address: {
    street: "gamla varvs",
    streetNr: "3a",
    zipCode: "41459",
    country: "Sweden",
    county: "VGR",
  },
};

export const ProfileContext = createContext<ProfileContextInterface>({
  profileData: initProfileData,
  setProfileData: () => {},
});

export const ProfileProvider = (props: any) => {
  const [profileData, setProfileData] = useState(initProfileData);

  return (
    <ProfileContext.Provider
      value={{
        profileData,
        setProfileData,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};
