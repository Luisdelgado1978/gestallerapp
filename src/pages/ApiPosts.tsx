import { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
} from "@ionic/react";

import { getPosts, Post } from "../services/api";

const ApiPosts: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setError("");

    getPosts()
      .then((d) => setData(d))
      .catch((e) => {
        console.error("ERROR API:", e);
        setError("ERROR REAL: " + String(e?.message || e));
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Consumo de API</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {error && (
          <IonText color="danger">
            <p>{error}</p>
          </IonText>
        )}

        <h2>1) Datos tal como vienen (crudos)</h2>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {JSON.stringify(data.slice(0, 3), null, 2)}
        </pre>

        <h2>2) Datos estructurados</h2>
        {data.slice(0, 10).map((p) => (
          <IonCard key={p.id}>
            <IonCardHeader>
              <IonCardTitle>{p.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{p.body}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default ApiPosts;