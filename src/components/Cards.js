/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Cards(props) {
  return (
    <div className="card">
      <img src={`${props.image}`} alt="poza" className="poza"></img>
      <div className="continut">
        <div className="location">
          <Image src="/fill 219.png" alt="location" width="10" height="16" />
          <h3>{props.location}</h3>
          <a href={`${props.googleMapsLink}`} rel="noreferrer" target="_blank">
            View on Google Maps
          </a>
        </div>
        <h1>{props.title}</h1>
        <h5>
          <span>{props.arival}</span> - <span>{props.departure}</span>
        </h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
