import { NextApiHandler } from 'next';
import { firestore } from 'firebase/admin';
/* import { firestore as fstore } from 'firebase'; */

const devit: NextApiHandler = (req, res) => {
   const { query } = req;
   const { id } = query;

   firestore
      .collection('deveets')
      .doc(id.toString())
      .get()
      .then(
         (
            doc: FirebaseFirestore.DocumentSnapshot<
               FirebaseFirestore.DocumentData
            >
         ) => {
            const data = doc.data() as any;
            const id = doc.id;
            const { createAt } = data;

            res.json({ ...data, id, createAt: +createAt.toDate() });
         }
      )
      .catch(() => res.status(404).end());
};

export default devit;
