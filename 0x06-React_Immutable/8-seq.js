import { Seq } from 'immutable';

export default function printBestStudents(object) {
    const seqData = Seq(object);
    const bestStudents = seqData
        .filter((grade) => grade.score > 70)
        .map((student) => {
            return {
                score: student.score,
                firstName: student.firstName,
                lastName: student.lastName,
            }
        });
    console.log(bestStudents.toJS());
}
