## SECTION 1 : PROJECT TITLE
## Project Procrastinate

---

## SECTION 2 : EXECUTIVE SUMMARY / PAPER ABSTRACT

In traditional undergraduate and graduate studies, lectures are often perceived as a necessary evil, yet recent research suggests that their effectiveness, especially in STEM fields, is questionable. Many students find extended lecture sessions tedious and unproductive. However, some of the most successful students employ strategies such as effective note-taking and mind mapping to extract key insights from lectures, enhancing their learning experience and overall academic performance.
Recognizing that lectures remain a predominant method of instruction in universities, we propose Procrastinate, a comprehensive framework and application designed to empower students to maximise the value of their lecture time. By leveraging advanced technology, our solution aims to transform recorded lectures into concise summaries and dynamic mind maps, providing students with invaluable resources for review and study.
Using Whisper's transcription capabilities, Procrastinate generates a complete transcript of recorded lectures. Subsequently, employing a BART-based Facebook CNN model, we distil this transcript into succinct text summaries, offering students a comprehensive overview of the lecture's content. To further facilitate comprehension and retention, we employ the transcript to construct visually engaging mind maps, aiding students in organising and contextualising key concepts.
Our team envisions that Procrastinate will empower students to extract meaningful insights from their daily lectures, thereby optimising their learning experience and academic outcomes. By equipping students with efficient tools for review and study, we aim to enhance their engagement in the learning process and promote academic success.

---

## SECTION 3 : CREDITS / PROJECT CONTRIBUTION

| Official Full Name  | Student ID (MTech Applicable)  | Work Items (Who Did What) | Email (Optional) |
| :------------ |:---------------:| :-----| :-----|
| Hou Lu Chiok Weh Alejandro | A0214865Y | Project Tech Lead<br/><br/> Project manager <br/><br/> System design architect<br/><br/> Database design<br/><br/> Integration<br/><br/> Backend Springboot<br/><br/> Backend Django<br/><br/> Database MySQL<br/><br/> Amazon S3 bucket<br/><br/> Deployment<br/><br/> Project video production<br/><br/> Project report (System design section and Appendix A, B, C) | e0696906@u.nus.edu |
| Michael Yang ZiChang | A0206039L | Whisper transcription model development and testing<br/><br/> Summarization Model Development<br/><br/> Automatic Knowledge Base and Mind Map creation<br/><br/> LDA model development<br/><br/> Project Report Writing | e0425962@u.nus.edu |
| Lee Jane | A0214865Y | Frontend UI<br/><br/> Backend<br/><br/> UX Integration<br/><br/> Software and Integration Testing | e0533359@u.nus.edu |

---

## SECTION 4 : VIDEO OF SYSTEM MODELLING & USE CASE DEMO

Link for our video can be found here:<br/><br/> [Procrastinate -- An Audio and Text Processing tool for Lazy Students](https://www.dropbox.com/scl/fo/qhux3axensxg31nn4sw3l/AFP_olhJc3mNHdrZPs4KO5I?dl=0&e=1&preview=procrastinate_demo_marketing.mp4&rlkey=pbzcpysll0ebytkk75vb7f9it&st=xznkhfvm "Procrastinate -- An Audio and Text Processing tool for Lazy Students")

---

## SECTION 5 : USER GUIDE

Using the application
There are 2 ways to use the procrastinate application. The simple and not so simple way. 

The first way: 

https://procrastinate-frontend.vercel.app/<br/>
Username: *refer to report* <br/>
Password: *refer to report*

That’s it. Our application is live on the web so it’s available to use anytime, anywhere (Or until our team runs out of money to host them)

Running the application on localhost
As our application is run by 1 frontend app and 2 microsoft, user will need to install 3 different environments

Frontend (Nextjs)
Requirement: <br/>
	Nodejs <br/>
	Npm 

Cd into procrastinate-frontend
Run `npm install`
Run `npm run dev` 
Go to `localhost 3000`










UI Workflow

Upon entering the website, users will first be directed to the landing page



When the “Stop Procrastinating” button is selected, if user is not signed in,
Users will be prompted to do so
On the same page, users can also opt to sign up



After the user signs in, they will be redirected to the summarise page. On this page, the user can upload audio or text files

If audio file is selected, the user will have the option to “Get transcript”

After file is selected and the “Get transcript” button is select, the user will be able to view and download the transcribed text

If a text file is selected, the user will be given the option to “Get Summary” or “Get Mindmap”

If “Get Summary” is select, the user will be able to see the summarised text along with the topics 


If “Get MindMap” is selected, the user will be given the option to “View MindMap” . This option will redirect the user to a separate page where the Mind Map will be displayed



User services (Springboot)
Requirement:
	Maven
	Java SDK / JDK

Set 3 environment vars <br/>
*refer to report* <br/>
cd into procrastinate-backend <br/>
Run `mvn spring-boot:run`

Data services (Django)
Requirement: <br/>
	Python 3.10 and above <br/> 
	`pip install -r requirements.txt` <br/>
Set 3 environment vars <br/>
*refer to report* <br/>
cd into procrastinate_data_processor <br/>
Run `python manage.py runserver`

NOTE: Upload audio files MAX runtime <= 3mins


The UI is dynamic and simple. Therefore we trust our users to be able to cruise around our MVP with ease. In any case, do refer to the demo/marketing video for a complete walkthrough if needed. 

---
## SECTION 6 : PROJECT REPORT / PAPER

`Refer to the submitted project report (on canvas) for more details`

Project Solution
4.1 Project Deliverables
 4.1.1 Application Features

The Procrastinate App is a pipeline of frameworks that take in a voice recording (.wav, .mp3, .m4a) file and transcribes it for a variety of analysis purposes. Once we acquire a text file (.txt) format, we take the text file and perform various analysis tasks on it. The main features include text summarization for an overview of the lecture, Knowledge Base mind map for the major topics covered and the Latent Dirichlet Allocation analysis should the student want to research further on each of the topics covered.

We cover the general architecture in the graphic below:





If the user has text data on their lectures, they can use the text data directly in our application to tap into the various features such as summary, Latent Dirichlet Allocation and our knowledge base creation module. Alternatively the user could upload their voice recording of the lecture and use the Whisper Model to generate a transcript of the lecture and use that as an input for the various features. For the POC, we used the CMU Computer graphics course to test the case where we have the voice recording of the lecture content.

4.1.2 Application Business Flow

<Insert UI process, probably part of the user guide>


Our application is a workflow system that uses speech cognitive systems to perform transcription for the lecture content after a user has sent in their lecture recording audio file. Through a knowledge-based system and a large database from wikipedia, we are able to create a set of relatively compact knowledge graphs by culling entities based on the wikipedia references of each entity that was detected from the extracted text. The text summarization function returns a summarised version of the lecture that is around 30% (Tunable by user) of the original lecture length. We also created a set of LDA analysis tools so the user can search up the top hits within the lecture for further studies after their lecture.

5. System design, architecture & implementation


Nextjs is our frontend client, springboot is our backend service, taking care of user services and security and django application will be on the data services. On the database side, we used MySQL as our relational database and we also use the Amazon S3 bucket
to store all our files so that it is easily accessible to be uploaded and downloaded by all our services. Finally the 4 models/techniques which we have selected
as the backbone of our system. A speech to text model, Latent Dirichlet allocation, knowledge graph and natural language processing.



5 .1 Use case diagram

Fig 5.1 - Final Use case diagram


Our use cases were trimmed down as the project progressed in order to meet a realistic deadline. However, plans for the use cases that were dropped were all taken care of in the database where all the relevant data were saved and preserved for their implementation. 

Use cases in the red bubble are our core use cases and those in green are enhancements to emulate a right world application. 





5 .2 Database design (Entity diagram)

Fig 5.2 Entity diagram



Note that ‘Topics’ and ‘Uploads’ are in a many to many relationship. This is because we want to make every topic unique to not flood the database with thousands of repeated topics. So every Upload can have many Topics and every Topic can belong to many Uploads. This will enable us to do a count of topics across all user’s uploads to know which topics the user is most in need of study material. This will also enable us to, in the future, match users with similar topics using the KNN model to find them study buddies. 







Fig 5.2.1 Tables



Fig 5.2.2 procrastinate_topics table



Fig 5.2.3 Amazon S3 bucket



The S3 bucket is a place where all the files - uploaded document, knowledge graphs, summary output and speech to text are stored. It is easily accessible by all members of the team and also easily downloaded by any of our applications. This is to lighten the workload of our application and prevent encoding, decoding byte arrays for blob type data.
5 .3 Workflow (Sequence diagram)

Fig  5.3.1 Use case sequence diagram (Sign in)


The first and most important workflow with the application starts off with the user signing in from the user interface. That sign in information will be sent over to our springboot
application where all the usual validations are made to confirm if the user exists or not. Then generate a JWT (json web token) which will be passed to the Django
application. Once the data service gets the jwt token, it will make a response back to springboot and springboot back to the UI to confirm that our session is now
secured and locked in for this user. Henceforth the frontend will be able to validate all requests with that JWT.


Fig 5.3.2 Use case sequence diagram (Create summary)


One of our core features is the create summary feature. It begins with the user uploading a document and clicking on the summarise button. The UI will send all the files to springboot where it uploads the file to our S3 bucket, retrieves a url and sends it to our data service for processing. With the url, our data service will then download the file from S3 bucket and this file will go through 2 processes. The BART model from facebook will work its magic
to summarise the document while the LDA model will extract the top topics from that document. The results will once again be uploaded to another folder in S3 bucket


and all related URLs will be saved into our database. Result url will be returned to springboot then to the UI to be displayed and downloaded.
Fig 5.3.3 LDA model workflow


The LDA model is where we extract the top topics from user uploaded documents. It starts off with our classic text preprocessing techniques. The biggest thing to note here
Is that we rely heavily on the coherence score to determine which topic we use. From those topics, which subjects we are selecting. In short, we are taking the top subjects (for example, computer science) from the top topics sorted by coherence scores. For future development, these topics will be used in various ways. Study recommender, web scraping for study material like youtube and test generation.


Lastly, the knowledge graph is created on top of the OpenNER (Named Entity Recognition) framework. Each NER output is structured with the Part of speech tags of the sentence. We take the first entity that is recognised and place it as a head of the argument (Depending on the context of the entity recognised, that might change), we attempt to place relations on the other entity found within the sentence, We then build iteratively based on the building blocks set up from the first few initial records. For each subsequent entity and relation, we check for the presence of the same entity within the knowledge graph in the first place. In order to create a more succinct knowledge graph, we tap into Wikipedia data and if the entity was also mentioned in related entries in wikipedia, we treat it as a similar entity and merge the node entries together before building the relational edges.




6. Project Performance

A major consideration regarding the day to day running of this project would be the computational requirements of the application given ASR and NER are all fairly heavy tasks by themselves.Runtime becomes a concern. For an automatic ASR task on a lecture, the runtime would usually be proportional to the duration of the lecture. That is usually acceptable for students. We can ask them to upload the recordings and ask them to wait for a few hours after getting the respective results that they needed since the application itself is not particularly time sensitive in anyways and real time inference is also not a requirement.

6.1 Test and POC Sets
For this POC project we tried to apply our methods on various different datasets and tasks that we find interesting. We first did ASR on the CMU computer graphics lecture series and used the output generated as input for the summarization, knowledge graph and the LDA analysis. Along with the CMU lecture series, we also used Animal Farm as a Benchmark index to see how long our task takes and whether the system has any major flaws. 

6.2 Observations
An interesting observation is that the summarization model is a CNN based model built on news dataset, during summarization tasks, some terms might trigger a response from the model to return a set of CNN related tokens and this deviates from the original context of the passage. This prompted us to think about the training source of the model, we initially assumed that the news would have provided a wide coverage for the model to gain an understanding on the context of most terms. On hindsight, perhaps a model trained on education related data (Such as secondary, high school speeches, although quite different, mimics the instructional nature of the speech used in university lectures)

Furthermore, due to the limitation of runtime, there are length limits to the audio file that we feed on the deployed version of the application, this is due to the runtime restriction that machine and online deployments can support. On a local GPU that we ran on, where the runtime and stability can be guaranteed, we do not run into this issue.Therefore for those who would like to try out this application on a larger set of text and audio file, we recommend running this on a computer that is suitable for large scale inference.






7. Challenges and Future Improvements
7.1 Technical Challenges

We pushed for a deployed system that primarily resides on the web. Of course that comes with its set of technical challenges and limitations. The task is technically challenging and we have run into multiple issues with springboot and hosting platforms. With running on qweb, we are then bottlenecked by the restrictions that we have discussed in the previous section on runtime capacity. At the same time we also exposed some interesting limitations from the summarization model due to token lengths and the CNN backbone trained on news data. This was exposed as a potential issue as we started on extensively testing our features for each section.

7.2 Future Improvements

The 2 important improvements that we would consider given enough time and resource would be first to consider the capacity and plan accordingly when designing the application. With a larger set of tasks we would have to allocate more resources and runtime to support the operations and that is true for the web deployments as well. The second point would be on the training data that we would use on the summarization model (As we have learnt how intimately connected the summary model is trained on versus how it is behaving during a deployment situation), we would have probably chosen to retrain or use a pretrained model that is trained based on education related data. (Such as summary writing in high schools or perhaps other forms of educationally related tasks).

---
