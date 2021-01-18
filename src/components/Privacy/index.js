import React from "react";
import { Button } from "../ButtonElements";
import Icon1 from "../../images/swirly.svg";

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    H1,
    Text,
    BtnWrap,
    Column2,
    ImgWrap,
    Img,
    SwirlyImg,
    H2,
    H3,
} from "./PrivacyElements";

const PrivacySection = ({
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabelOne,
    buttonLabelTwo,
    img,
    alt,
    primary,
    dark,
    dark2,
}) => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <TextWrapper>
                        <H1>Flick Privacy Policy</H1>
                        <H2>Privacy Policy of Flick</H2>
                        <Text>
                            This application gathers basic personal data from
                            its users.
                        </Text>
                        <H2>Owner and Data Controller</H2>
                        <Text>flick.flickchicks@gmail.com</Text>
                        <H2>Types of Data Collected</H2>
                        <Text>
                            Flick (owner) will not provide a comprehensive list
                            of personal data types gathered.
                        </Text>
                        <Text>
                            Users are responsible for any third-party data
                            obtained, the use of cookies and cookie policies,
                            and are freely responsible for providing the
                            necessary data (defined as a Facebook Login or Apple
                            Login) to Flick.
                        </Text>
                        <Text>
                            The types of data collected by Flick include, but
                            are not limited to, the collection of notification
                            data, saved movie lists, friendships, and the
                            collection of debug logs and analytics, these items
                            being defined by device information, defined by
                            device model, software version, app version, and
                            language.
                        </Text>
                        <Text>Flick does not use cookies.</Text>
                        <H2>Mode and Place of Processing the Data</H2>
                        <Text>
                            Application owner processes user data in an
                            appropriate manner and will take all necessary
                            precautions to maintain the integrity of their
                            security systems to prevent unauthorized access and
                            information sharing. Data processing is carried out
                            via computers and other IT enabled tools as deemed
                            fit.
                        </Text>
                        <Text>
                            This may be updated by the application owner at any
                            time. Some general and personal data is stored
                            indefinitely, such as debug logs. Please contact
                            aforementioned application owner for more detail. To
                            suspend or remove data, please contact application
                            owner as well. Aforementioned debug logs are
                            retained indefinitely until deleted on individual
                            app launches.
                        </Text>
                        <Text>
                            Flick does not guarantee or secure retention times
                            for any and all data types collected (see “Types of
                            Data Collected”).
                        </Text>
                        <Text>
                            Data is collected to provide application services,
                            registration, identification, and user
                            authentication.
                        </Text>
                        <H2>Legal Action</H2>
                        <Text>
                            Personal data provided by user may be utilized for
                            legal purposes by application owner and/or data
                            controller under warranted circumstances as
                            indicated by a court of law, or in leading to
                            potential legal action stemming from improper use of
                            the application. User declares awareness that
                            personal information may be revealed if required by
                            legally-relevant public authorities.
                        </Text>
                        <H2>Information Not Contained in this Policy</H2>
                        <Text>
                            Users may request more information concerning data
                            usage, collection, etc. by contacting the
                            application owner listed above.
                        </Text>
                        <H2>The Rights of Users</H2>
                        <Text>
                            Users may request knowledge of how their personal
                            data has been collected, used and stored at any
                            time. Requests should be sent to the data controller
                            or the application owner via email.
                        </Text>
                        <H2>Changes to this Privacy Policy</H2>
                        <Text>
                            Flick reserves the right to update and modify this
                            privacy policy at the application owner’s discretion
                            at any time.
                        </Text>
                        <H2>Definitions and Legal References</H2>
                        <Text>
                            Personal Data (or Data) Any information provided by
                            the user (defined below) pertaining to the user’s
                            identification.
                        </Text>
                        <H3>User</H3>
                        <Text>
                            The individual using the application (Flick).
                        </Text>
                        <H3>Data Controller (or Owner)</H3>
                        <Text>
                            Flick application and all team members who retain
                            the right to make any and all decisions regarding
                            the application in all of its uses, forms, systems,
                            etc. across the board.
                        </Text>
                        <H3>This Application</H3>
                        <Text>
                            The hardware or software by which data and data
                            pertaining to the user is collected.
                        </Text>
                        <H3>Additional Legal Information</H3>
                        <Text>
                            Flick, its members, and the Application Owner(s) are
                            not responsible for user usage of the application,
                            consequences of use, personal data security, or any
                            other forms or facets of the application and its
                            use. This privacy policy related only to this
                            application (Flick).
                        </Text>
                    </TextWrapper>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default PrivacySection;
