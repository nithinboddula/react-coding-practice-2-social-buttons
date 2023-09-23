const Button = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div class="buttons-container">
      <Button name="Like" className="like-button" />
      <Button name="Comment" className="comment-button" />
      <Button name="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
