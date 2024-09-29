import classes from "./FriendsListItem.module.css";

function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <div className={classes["friends-item"]}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={classes["friends-name"]}>{name}</p>
      <p className={classes[isOnline ? "online" : "offline"]}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendsListItem;
