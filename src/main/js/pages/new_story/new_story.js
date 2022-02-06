import React, { useState } from "react";
import Navigation from "../../components/navigation/navigation";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NewStory = () => {
    const [editorState, editorStateSetter] = useState(
        EditorState.createEmpty()
    );

    const onEditorStateChange = (editorState) => {
        editorStateSetter(editorState);
    };
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    const submitPost = () => {
        console.log("Submitted");
    };

    return (
        <>
            <Navigation title="Draft" submit={submitPost} />
            <div id="new__story">
                <input id="new__story__input__title" placeholder="Title" />
                {/* <Editor
                    editorClassName="new__story__input__text"
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                /> */}
                <textarea className="new__story__input__text" />
            </div>
        </>
    );
};

export default NewStory;
