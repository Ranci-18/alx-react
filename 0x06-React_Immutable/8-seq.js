import { Seq } from 'immutable';

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export default function printBestStudents(object) {
    const seqData = Seq(object);
    const bestStudents = seqData
        .filter((student) => student.score > 70)
        .map((student) => {
            return {
                score: student.score,
                firstName: capitalizeFirstLetter(student.firstName),
                lastName: student.lastName,
            }
        });
    console.log(bestStudents.toJS());
}
