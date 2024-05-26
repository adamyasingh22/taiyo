import React from "react";
import { useGetDiseases } from "../../hooks/useGetDiseases";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { ContactView } from "../../components/molecules/contact";
import { NoContactView } from "../../components/organisms/NoContactView";
import { ScreenContainer } from "../../components/molecules/ScreenContainer";

export const Home: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts);

  return (
    <ScreenContainer>
      <button
        id="button"
        className="border-solid border-2 max-sm:w-1/3 w-1/4 text-center my-2"
      >
        <Link to="/create">Create Contact</Link>
      </button>

      {contacts.length === 0 ? (
        <NoContactView />
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {contacts.map((el, idx) => {
            return (
              <ContactView
                key={idx}
                firstName={el.firstName}
                lastName={el.lastName}
                id={el.id}
              />
            );
          })}
        </div>
      )}
    </ScreenContainer>
  );
};
