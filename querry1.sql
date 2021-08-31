CREATE TABLE accounts(FirstName varchar(225), LastName varchar(225), EMAIL varchar(225), Password varchar(225));
CREATE TABLE account_details(EMAIL varchar(225), Book1 varchar(225), Book2 varchar(225), Book3 varchar(225), Book4 varchar(225), Book5 varchar(225), Book6 varchar(225));
CREATE TABLE CS (ISBN VARCHAR(225), BookName VARCHAR(225), BookAuthor VARCHAR(225), Publisher VARCHAR(225), Edition VARCHAR(225));
CREATE TABLE PCM (ISBN VARCHAR(225), BookName VARCHAR(225), BookAuthor VARCHAR(225), Publisher VARCHAR(225), Edition VARCHAR(225));
CREATE TABLE Others (ISBN VARCHAR(225), BookName VARCHAR(225), BookAuthor VARCHAR(225), Publisher VARCHAR(225), Edition VARCHAR(225));

INSERT INTO cs (ISBN ,BookName, BookAuthor, Publisher, Edition)
VALUES ('935316513', 'Programming In Ansi C', 'E. Balagurusamy', 'McGraw Hill Education','Eighth Edition'),
('9789332570405', 'Computer Organization and Architecture', 'William Stallings', 'Pearson Education India','Tenth Edition'),
('9351282015', 'Structured Query language for all RDBMS and PL/SQL', ' Kriti Sinha ', 'Kalpaz Publications','First Edition'),
('819324527X', 'Data Structures and Algorithms Made Easy: Data Structures and Algorithmic Puzzles', 'Narasimha Karumanchi', 'Careermonk Publications','Fifth Edition');

INSERT INTO pcm (ISBN ,BookName, BookAuthor, Publisher, Edition)
VALUES ('9384588024', 'Engineering Chemistry', ' R. V. Gadag & A. Nityananda Shetty', ' I K International Publishing House Pvt. Ltd','Third Edition'),
('9788126514663', 'Digital Electronics: Principles and Integrated Circuits', 'Anil K. Maini', 'Wiley','First Edition'),
('9781316632932', 'Basic Electronics: Principles and Applications', 'C. Saha & A. Halder & D. Ganguly', 'Cambridge University Press','First Edition'),
('8184875606', 'Advanced Engineering Mathematics', ' S. R. K. Iyengar & R. K. Jain  ', 'Narosa','Fifth Edition'),
('9352606957', 'Engineering Physics', ' Hitendra K. Malik  &  A. K. Singh  ', 'McGraw Hill Education','Second Edition'),
('9789332584747', 'Engineering Mechanics', 'R. C. Hibbeler ', 'Pearson Education','Fourteenth Edition');

INSERT INTO others (ISBN ,BookName, BookAuthor, Publisher, Edition)
VALUES ('8183711545', 'Communication Skills for Engineers', 'K. R. Lakshminarayanan', 'Scitech Publications (India) Pvt. Ltd','Third Edition'),
('0070586705', 'ENGINEERING ECONOMICS', 'James Riggs ', 'McGraw Hill Education','Fourth Edition'),
('110871644X', 'English For Engineers', 'C. Savitha', 'Cambridge University Press','First Edition');
