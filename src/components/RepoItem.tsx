import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonThumbnail } from "@ionic/react";
import "./RepoItem.css";
import React from "react";
import { pencilOutline, trashOutline } from "ionicons/icons";
import { Repository } from "./Interfaces/Repository";


const RepoItem: React.FC<Repository> =(Repository) => {
    return (
        <IonItemSliding>
            <IonItem>
              <IonThumbnail slot="start">
                <img alt={Repository.name}src={Repository.owner.avatar_url} />
              </IonThumbnail>

              <IonLabel>
                <h2>{Repository.name}</h2>
                <p>{Repository.description}</p>
                <p>Lenguaje: {Repository.language}</p>
              </IonLabel>
            </IonItem>

            <IonItemOptions side="end">
              <IonItemOption color="primary">
                <IonIcon icon={pencilOutline} />
              </IonItemOption>

              <IonItemOption color="danger">
                <IonIcon icon={trashOutline} />
              </IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
    )
};
export default RepoItem;