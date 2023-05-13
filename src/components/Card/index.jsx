import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const Card = ({ data }) => {
  return (
    <>
      <div className="card-group">
        {data &&
          data.map((item) => {
            return (
              <div key={item.id} className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Вопросы: {item.question}</p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">{item.date}</small>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Card;
