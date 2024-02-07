import React, { useEffect, useState, useRef } from "react";
import "../accounts/journal.css";
import Happy from "./assets1/Happy.png"
import Relaxed from "./assets1/Relaxed.png"
import Anxious from "./assets1/content.png"
import Angry from "./assets1/angry.png"
import Low from "./assets1/sad.png"
import jour from "../accounts/assets1/noteimg.png";
import { usePDF } from "react-to-pdf";
import Bold from "../assets/bold.png";
import Italic from "../assets/italic.png";
import Underline from "../assets/underline.png";
import Hyperlink from "../assets/link.png";
import Alignleft from "../assets/left.png"
import Aligncenter from "../assets/center.png"
import AlignRight from "../assets/right.png"
import Bullets from "../assets/bullet-list.png"
import {jsPDF} from 'jspdf';
// import 'jspdf-a'
import Swal from 'sweetalert2';
const RadioButton = ({ children, onClick, isSelected }) => (
  <button
    className={`custom-button ${isSelected ? "selected" : ""}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const saveEntryToServer = async (entryData) => {
  // ... (unchanged saveEntryToServer function)
};

export const Journal = () => {
  const [journalEntry, setJournalEntry] = useState("");
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [currentDate, setCurrentDate] = useState(getTodayDate());
  const [isSaveSelected, setSaveSelected] = useState(false);
  const [isCancelSelected, setCancelSelected] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null)
  const [text, setText] = useState('');
  const [isBold,setBold] = useState(false);
  const [isItalic,setItalic] = useState(false);
  const [isUnderline,setUnderline] = useState(false);
  const [isHyperLink,setHyperLink] = useState(false);
  const [isLeftAlignment,setLeftAlignment] = useState(false);
  const [isCenterAlignment,setCenterAlignment] = useState(false);
  const [isRightAlignment,setRightAlignment] = useState(false);
  const [isBullets,setBullets] = useState(false);
  const [place,setPlace] = useState("Put Your Thoughts");

  const getPlace = () =>{
    if(place === "Put Your Thoughts") setPlace("Empty");
    else setPlace('Red');
    
        
  }
  
  // const componentRef = useRef();
  // const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const handleTextChange = (e) => {
    setText(e.target.value);
    
  };

  

  const downloadPDF = () => {
    console.log();
    if(text.trim()!=='' && selectedEmoji && text && selectedJournal && selectedTag){
      
      const content = `
      ${text},
      ${selectedEmoji},
      ${selectedJournal},
      ${selectedTag}
      `
      const pdf = new jsPDF()
      pdf.text(content, 10, 10);
      Swal.fire({
        title: "Do you want to Download PDF?",
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: "Download",
        denyButtonText: `Cancel`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("PDF Dowloaded!", "", "success");
          pdf.save('page.pdf');
        } else if (result.isDenied) {
          Swal.fire("Download Cancel", "", "info");
        }
      });
    }
    
    else{
      // text('');
      // alert('Textarea is Empty. please write someting.')
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Fields are Empty!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    };
  };

  function getTodayDate() {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return today.toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getTodayDate());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleJournalChange = (journal) => {
    setSelectedJournal(journal);
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };

  const handleSave = async () => {
    const entryData = {
      date: currentDate,
      content: journalEntry,
      journal: selectedJournal,
      tag: selectedTag,
    };

    const isSaved = await saveEntryToServer(entryData);

    if (isSaved) {
      setJournalEntry("");
      setSelectedJournal(null);
      setSelectedTag(null);
      setSaveSelected(false);

      // toPDF();
    }
  };

  const handleCancel = () => {
    setCurrentDate(getTodayDate());
    setJournalEntry("");
    setSelectedJournal(null);
    setSelectedTag(null);
  };

  const handleSaveSelect = () => {
    setSaveSelected(true);
    setCancelSelected(false);
  };

  const handleCancelSelect = () => {
    setSaveSelected(false);
    setCancelSelected(true);
  };

  const emojiFeedback = (e) => {
  setSelectedEmoji(e.target.value)
  };
  const handleToggleBold = () =>{
    setBold(!isBold);
  };
  const handleToggleItalic = () =>{
    setItalic(!isItalic);
  };
  const handleToggleUnderline = () =>{
    setUnderline(!isUnderline);
  };
  const handleToggleHyperlink = () =>{
    setHyperLink(!isHyperLink);
  };
  const handleToggleAlignLeft = () =>{
    setLeftAlignment(!isLeftAlignment);
  };
  const handleToggleAlignCenter = () =>{
    setCenterAlignment(!isCenterAlignment);
  };
  const handleToggleAlignRight = () =>{
    setRightAlignment(!isRightAlignment);
  };
  const handleToggleBullets = () =>{
    setBullets(!isBullets);
  };
  // };

    // const formattedText = () => {
    //   let result =text
    //   if(isBold){
        
        
    //   }
    //   if(isItalic){
    //     result = `*{result}*`;
    //   }
    //   if(isUnderline){
    //     result = `<u>${result}</u>`;
    //   }
    //   return result;
    // }
  return (
    <div className="journal-container">
      <h1 className="journal-title">Create Your Journal</h1>

      <p className="journal-discovery-text">
        "Every entry is a step towards self-discovery."
      </p>
      <div className="journal-actions">
        <h2>Pick a Journal to Write In:</h2>
      </div>
      <table>
        <tr>
          <td>
            <div className="journal-button-group">
              {[
                "My Thoughts",
                "Daily Reflections",
                "Gratitude",
                "Self Discovery",
                "To-Do",
              ].map((journal) => (
                <RadioButton
                  key={journal}
                  isSelected={selectedJournal === journal}
                  onClick={() => handleJournalChange(journal)}
                >
                  {journal}
                </RadioButton>
              ))}
            </div>
          </td>
          <td>
            <img src={jour} alt="Journal" />
          </td>
        </tr>
      </table>

      <div className="journal-prompt">
        <p>Eg: What or who are you thankful for today?</p>
      </div>
      <div className="journal-thought-box">
        <textarea
        value={text} onChange={handleTextChange}
        
        style={{
          outline:'none',
          fontWeight:isBold ? 'bold' : 'normal',
          fontStyle:isItalic ? 'italic' : 'normal',
          textDecoration:isUnderline ? 'underline': 'none',
          justifyContent:isLeftAlignment ? 'left':"normal",
          listStyle:Bullets ? "outside":"outside"
          
        }}
        contentEditable
        name="prompt"
          className="thought-input"
          placeholder={place ? 'PutYour':getPlace? ' Empty': ''}
        />
        
      
            <div className="text-formating">
                <button onClick={handleToggleBold}>
                  <img src={Bold} alt="bold img" />
                </button>
                <button onClick={handleToggleItalic}>
                  <img src={Italic} alt="italic img" />
                </button>
                <button onClick={handleToggleUnderline}>
                  <img src={Underline} alt="underline img" />
                </button>
                <button onClick={handleToggleHyperlink}>
                  <img src={Hyperlink} alt="hyperlink img" />
                </button>
                <button onClick={handleToggleAlignLeft}>
                  <img src={Alignleft} alt="alignleft img" />
                </button>
                <button onClick={handleToggleAlignCenter}>
                  <img src={Aligncenter} alt="Aligncenter img" />
                </button>
                <button onClick={handleToggleAlignRight}>
                  <img className="align-right" src={AlignRight}  alt="Alignright img" />
                </button>
                <button onClick={handleToggleBullets}>
                  <img src={Bullets} alt="Bullets img" />
                </button>
            </div>
      </div>
      <hr />
      <div  className="text-prompt">
        <h2>Select A Tag</h2>
      </div>
      <table>
        <tr>
          <td>
            <div className="tag-button-group">
              {["Career", "Family", "Love", "Social", "Self", "Other"].map(
                (tag) => (
                  <RadioButton
                    key={tag}
                    isSelected={selectedTag === tag}
                    onClick={() => handleTagChange(tag)}
                  >
                    {tag}
                  </RadioButton>
                )
              )}
              
            </div>
          </td>
        </tr>
      </table>
      <div className="container">
        
      <div className="emoji">
        <h2>How Are You Feelling?</h2>

        <div className="emoji-fb">
          <button onClick={emojiFeedback} value="Happy"><img style={{pointerEvents:"none"}} src={Happy} alt="" />Happy</button>
          <button onClick={emojiFeedback} value="Relaxed"><img style={{pointerEvents:"none"}} src={Relaxed} alt="" />Relaxed</button>
          <button onClick={emojiFeedback} value="Anxious"><img style={{pointerEvents:"none"}} src={Anxious} alt="" />Anxious</button>
          <button onClick={emojiFeedback} value="Angry"><img style={{pointerEvents:"none"}} src={Angry} alt="" />Angry</button>
          <button onClick={emojiFeedback} value="Low"><img style={{pointerEvents:"none"}} src={Low} alt="" />Low</button>
        </div>
      </div>
      </div>
      <hr />

      <table className="table21">
        <tr>
          <td>
            <form>
              <div className="date-and-buttons">
                <div className="current-date">
                  <p>{currentDate}</p>
                </div>
              </div>
            </form>
          </td>
          <td className="table22">
            <table>
              <tr>
                <td>
                  <div>
                    <div className="Save-Button">
                      <button onClick={downloadPDF}>Save</button>
                      {/* <div ref={targetRef}></div> */}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="button-container">
                    {isSaveSelected ? (
                      <button onClick={downloadPDF}>Download PDF</button>
                    ) : (
                      <>
                        <span className="button-spacing"></span>
                        <RadioButton
                          type="button"
                          onClick={handleCancelSelect}
                          selected={isCancelSelected}
                        >
                          Cancel
                        </RadioButton>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};
