import React, {useEffect, FC, useRef} from "react";

import {useGetUsersQuery} from "../../../../../store/api/usersApi";
import UserCard from "../../../../../sharedComponents/UserCard";
import Preloader from "../../../../Preloader";
import ErrorBoundary from "../../../../../helpers/ErrorBoundary";
import ErrorText from "../../../../ErrorText";
import {loadUsers} from "../../../../../helpers/functions/gsap";

interface PUsers {
  page: number,
  setDisabled: (disabled: boolean) => void
}

const Users: FC<PUsers> = (({page, setDisabled}) => {
  const {data, isLoading, error} = useGetUsersQuery({page: page, count: 6});

  const userContRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    loadUsers(userContRef);
  }, [data, userContRef]);

  useEffect(() => {
    if (data && data.total_pages === page) setDisabled(true);
  }, [data, page, setDisabled]);

  useEffect(() => {
    if (error) setDisabled(true);
  }, [error, setDisabled]);

  return (
    <div className="hp-users__cards" ref={userContRef}>
      <ErrorBoundary ErrorComponent={ErrorText}>
        {isLoading
          ? <Preloader/>
          : error ? ""
            : data?.users.map(({id, name, email, photo, phone, position}) =>
              <UserCard
                key={id}
                name={name}
                email={email}
                phone={phone}
                photo={photo}
                position={position}
              />)
        }
      </ErrorBoundary>
    </div>
  );
});

export default Users;