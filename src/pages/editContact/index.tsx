import { useEffect, useState } from "react";
import { TextInput } from "../../components/molecules/input";
import { RadioInput } from "../../components/molecules/radioInput";
import { Tag } from "../../components/atoms/tag";
import { SubHeading } from "../../components/atoms/subheading";
import { Button } from "../../components/molecules/button";
import { ScreenContainer } from "../../components/molecules/ScreenContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { edit } from "../../redux/contactSlice";

export const EditContact = () => {
    const {id} = useParams()
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector((state: RootState) => state.contacts)
  useEffect(() => {
    const contactIdx = contacts.findIndex(obj => obj.id === id);
    const contactFound = contacts[contactIdx];
    setFirstName(contactFound.firstName)
    setLastName(contactFound.lastName)
    setActive(contactFound.active)
  }, [])

  const saveEditedContact = () => {
    dispatch(edit({
        firstName: firstName,
        lastName: lastName,
        active: active,
        id: id
    }))
    navigate('/')
  }
  return (
    <ScreenContainer>
      <SubHeading text="Edit contact Screen" />
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
      <Button title="Save Edited Contact" onPress={() => saveEditedContact()} />
    </ScreenContainer>
  );
};
