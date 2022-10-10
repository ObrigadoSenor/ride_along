import React, { useContext } from "react";

import { Inputs } from "../atoms/input";
import { MultipleInputs } from "../atoms/multipleInputs";
import { Panel } from "../molecules/Panel";
import { ProfileContext } from "../state/providers/profileProvider";

export const Profile = () => {
  const { profileData, setProfileData } = useContext(ProfileContext);

  return (
    <Panel scrollView={true} title="Profile">
      <MultipleInputs
        inputs={[
          {
            placeholder: "Firstname",
            value: profileData.firstName,
            onChangeText: (t) =>
              setProfileData({ ...profileData, firstName: t }),
          },
          {
            placeholder: "Surname",
            value: profileData.surName,
            onChangeText: (t) => setProfileData({ ...profileData, surName: t }),
          },
        ]}
        sizes={["50%", "50%"]}
      />
      <Inputs
        inputs={[
          {
            placeholder: "Email",
            value: profileData.email,
            onChangeText: (t) => setProfileData({ ...profileData, email: t }),
            keyboardType: "email-address",
          },
          {
            placeholder: "Phone number",
            value: profileData.phoneNumber,
            onChangeText: (t) =>
              setProfileData({ ...profileData, phoneNumber: t }),
            keyboardType: "phone-pad",
          },
        ]}
      />
      <MultipleInputs
        inputs={[
          {
            placeholder: "Country",
            value: profileData.address.country,
            onChangeText: (t) =>
              setProfileData({
                ...profileData,
                address: { ...profileData.address, country: t },
              }),
          },
          {
            placeholder: "Street",
            value: profileData.address.street,
            onChangeText: (t) =>
              setProfileData({
                ...profileData,
                address: { ...profileData.address, street: t },
              }),
          },
        ]}
        sizes={["40%", "60%"]}
      />
      <MultipleInputs
        inputs={[
          {
            placeholder: "Street nr",
            value: profileData.address.streetNr,
            onChangeText: (t) =>
              setProfileData({
                ...profileData,
                address: { ...profileData.address, streetNr: t },
              }),
          },
          {
            placeholder: "Zip code",
            value: profileData.address.zipCode,
            onChangeText: (t) =>
              setProfileData({
                ...profileData,
                address: { ...profileData.address, zipCode: t },
              }),
            keyboardType: "numeric",
          },
          {
            placeholder: "County",
            value: profileData.address.county,
            onChangeText: (t) =>
              setProfileData({
                ...profileData,
                address: { ...profileData.address, county: t },
              }),
          },
        ]}
        sizes={["30%", "30%", "40%"]}
      />
    </Panel>
  );
};
