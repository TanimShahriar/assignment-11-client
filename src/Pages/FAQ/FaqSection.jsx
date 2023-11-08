

const FaqSection = () => {
  return (
    <div className="bg-blue-300 rounded-lg pt-4">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-xl md:text-3xl text-blue-500 font-bold capitalize">Frequently asked questions</div>
        <div className="border-b-4 border-blue-500 -mt-2"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
        <div className="text-black text-center mt-5 max-w-screen-lg">Get your questions answered about our policy.  An online study group is a virtual community of students who come together to collaborate, share resources, and study together using digital tools and platforms. We can help.
        </div>
      </div>

      <div className="collapse collapse-plus bg-blue-300 mt-4 border-b">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What is an online study group?
        </div>
        <div className="collapse-content">
          <p>An online study group is a virtual community of students who come together to collaborate, share resources, and study together using digital tools and platforms.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-blue-300 my-2 border-b">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can I join an online study group on this website?
        </div>
        <div className="collapse-content">
          <p>To join our online study group, simply create an account on our website and browse through the available study groups. Once you find one that interests you, click "Join Group" to become a member.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-blue-300 my-2 border-b">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Are there any fees for joining or using the study groups on this website?
        </div>
        <div className="collapse-content">
          <p>No, joining and participating in our online study groups is completely free. We believe in providing accessible educational resources and a supportive community for all.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-blue-300 my-2 border-b">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I create my own study group on this website?
        </div>
        <div className="collapse-content">
          <p>Yes, you can create your own study group. After signing in, you'll find an option to start a new group. You can invite others to join and set the group's focus and rules.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-blue-300 my-2 border-b">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What resources are available for study group members?
        </div>
        <div className="collapse-content">
          <p>Study group members can access shared resources such as study guides, notes, links to educational materials, and discussion threads related to the group's focus.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-blue-300 my-2 border-b">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can I interact with other study group members outside of study sessions?
        </div>
        <div className="collapse-content">
          <p>Yes, you can interact with other members through the messaging system on our website. It's a great way to collaborate and discuss topics even when not in a scheduled study session.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-blue-300 my-2 border-b">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How can I provide feedback or suggestions for improving the website?
        </div>
        <div className="collapse-content">
          <p>We welcome your feedback! Please use the Contact Us page to share your suggestions or report any issues. We're always looking for ways to enhance the online study group experience.</p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;