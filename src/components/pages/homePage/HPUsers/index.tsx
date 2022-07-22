import React, { useMemo, useRef} from "react";

import "./index.scss";

import Button from "../../../../sharedComponents/Button";
import {useTypedSelector} from "../../../../helpers/hooks/useTypedRedux";
import {useActions} from "../../../../helpers/hooks/useActions";
import doScroll from "../../../../helpers/functions/doScroll";

import Users from "./Users";

const HPUsers = () => {
  const {pages, disabledUsersButton: disabled} = useTypedSelector(state => state.homeReducer);
  const {setDisabledUsersButton, addPages} = useActions();
  const nextPage = () => {
    addPages();
    const cont=document.querySelector(".hp-users__container-for-cont");
    setTimeout(()=>doScroll(cont?.children[cont.children.length-1],1500),0);
  };
  const disableSetter = (status: boolean) => setDisabledUsersButton(status);
  const arr = useRef<any>([]);

  const allCards = useMemo(() => {
    if (pages.length === 1) {
      arr.current = [
        <Users
          setDisabled={disableSetter}
          key={pages[pages.length - 1]}
          page={pages[pages.length - 1]}/>
      ];
      return arr.current;
    }
    arr.current.push(<Users
      setDisabled={disableSetter}
      key={pages[pages.length - 1]}
      page={pages[pages.length - 1]}/>);
    return arr.current;
    /*eslint-disable*/
  }, [pages]);
  /*eslint-enable*/
  return (
    <section className="hp-users" >
      <div className="hp-users__container _container">
        <h1 className="hp-users__title">
          Working with GET request
        </h1>
        <div className="hp-users__container-for-cont">
          {allCards}
        </div>
        <Button className={`hp-users__button ${disabled && "unShow"}`}
          onClick={nextPage}
        >
          Show more
        </Button>
      </div>
    </section>
  );
};

export default HPUsers;