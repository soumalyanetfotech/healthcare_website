import "../common/Ai.css";
import toggle from "../accounts/assets1/Triggerchat1.png";

export const Ai = () => {
  return(
    <>
    <div class="center">
      <div class="pulse">
        <button>
          <img className="chat_button" src={toggle} alt="chat-button" />
        </button>
      </div>
    </div>
    </>
  )
  
};
