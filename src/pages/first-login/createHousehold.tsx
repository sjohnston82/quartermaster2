import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSession, getSession } from "next-auth/react";

import { api } from "../../utils/api";

const CreateHousehold = () => {
  const { status } = useSession();
  const utils = api.useContext();
  const { mutate: createHousehold, data } = api.household.create.useMutation({
    onSuccess: () => utils.household.getUser.invalidate(), // invalidate the user query when we create so it fetches the updated user
  });

  const [householdName, setHouseholdName] = useState<string>("");

  if (status === "loading") return <div>loading...</div>;

  if (status === "unauthenticated") return <div>unauthenticated</div>;

  const handleSubmit = () => createHousehold(householdName);

  // const newHousehold = api.household.create.useMutation({
  //   onSuccess: () => {
  //     console.log("Household created");
  //   },
  // });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Household name</label>
        <input
          value={householdName}
          onChange={(e) => setHouseholdName(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>

      {data?.name && ( // only show this if the user data includes household (only will after the createHoldehold function)
        <div>
          <h2>You now belong to household {data.name}!</h2>
          <h2>Total members: {data.members}</h2>
        </div>
      )}
    </>
  );
};

export default CreateHousehold;
