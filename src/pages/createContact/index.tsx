import { useState } from "react";
import { TextInput } from "../../components/molecules/input";
import { RadioInput } from "../../components/molecules/radioInput";
import { Tag } from "../../components/atoms/tag";
import { SubHeading } from "../../components/atoms/subheading";
import { Button } from "../../components/molecules/button";
import { ScreenContainer } from "../../components/molecules/ScreenContainer";
import { useDispatch } from "react-redux";
import { save } from "../../redux/contactSlice";
import { useNavigate, useNavigation } from "react-router-dom";

export const CreateContact = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

    const saveContact = () => {
        dispatch(save({
            firstName: firstName,
            lastName: lastName,
            active: active
        }))
        navigate('/')
    }

  return (
    <ScreenContainer>
      <SubHeading text="Create contact Screen" />
      <div className="flex flex-col border-solid border-2 p-4 space-y-2 w-1/3">
        <div className="">
          <Tag text="First Name : " />
          <TextInput
            value={firstName}
            setValue={setFirstName}
            placeholder="First Name"
          />
        </div>
        <div className="">
          <Tag text="Last Name : " />
          <TextInput
            value={lastName}
            setValue={setLastName}
            placeholder="Last Name"
          />
        </div>
        <div className="flex space-x-2">
          <Tag text="Status : " />
          <RadioInput value="Active" />
          <RadioInput value="Inactive" />
        </div>
      </div>
      <Button title="Save Contact" onPress={() => saveContact()} />
    </ScreenContainer>
  );
};
