import Button from "./Button";

function ErrorState({ message, onRetry }) {
  return (
    <div className="state-card state-card--error" role="alert">
      <h2>Something went wrong</h2>
      <p>{message}</p>
      {onRetry ? (
        <Button variant="secondary" onClick={onRetry}>
          Try again
        </Button>
      ) : null}
    </div>
  );
}

export default ErrorState;
