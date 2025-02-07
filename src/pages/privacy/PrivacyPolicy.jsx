import React from "react";
import "./style.scss"; // Import your stylesheet
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PrivacyPolicy = () => {
    return (
        <div className="privacyPolicyPage">
            <ContentWrapper>
                <div className="privacyPolicyContent">
                    <h1 className="privacyPolicyTitle">Privacy Policy</h1>
                    <p className="privacyPolicyText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis blandit enim, ut auctor nunc egestas sed. Ut condimentum hendrerit nisi, id dictum lorem maximus vel. Mauris sit amet mauris neque. Fusce a nisl aliquam, egestas libero eu, pharetra eros. Curabitur in ex vel orci bibendum mattis.
                    </p>
                    <p className="privacyPolicyText">
                        Sed ut nisi consequat, commodo augue ut, posuere nisl. Fusce id justo sit amet odio iaculis accumsan. Proin sed massa sit amet est venenatis bibendum. Nam a ligula quis urna euismod congue. In hac habitasse platea dictumst. Aliquam non nunc ultricies, vestibulum libero nec, vehicula orci.
                    </p>
                    <p className="privacyPolicyText">
                        Phasellus rhoncus eu felis nec ullamcorper. In vel sollicitudin mi. Fusce pretium est sit amet risus fermentum, non varius ex finibus. Suspendisse sed tristique enim. Proin a sodales mi, non ultricies arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In in neque a justo consequat venenatis.
                    </p>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default PrivacyPolicy;
