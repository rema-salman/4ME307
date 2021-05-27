import { Modal, Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import moment from "moment";

function ChartModal(props) {
  const { moistureLevels, fieldReadingDate } = props;

  const formateDates = (fieldReadingDate) => {
    const newFormatedDateList = [];
    for (let i in fieldReadingDate) {
      newFormatedDateList.push(moment(fieldReadingDate[i]).format("lll"));
    }
    return newFormatedDateList;
  };

  const data = {
    labels: formateDates(fieldReadingDate),
    datasets: [
      {
        label: "Moisture levels of this field",
        data: moistureLevels,
        borderColor: "#5cb85c",
      },
    ],
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Moisture levels of this field
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Line data={data} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ChartModal;
