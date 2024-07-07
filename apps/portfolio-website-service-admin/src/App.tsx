import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { SkillList } from "./skill/SkillList";
import { SkillCreate } from "./skill/SkillCreate";
import { SkillEdit } from "./skill/SkillEdit";
import { SkillShow } from "./skill/SkillShow";
import { ContactFormList } from "./contactForm/ContactFormList";
import { ContactFormCreate } from "./contactForm/ContactFormCreate";
import { ContactFormEdit } from "./contactForm/ContactFormEdit";
import { ContactFormShow } from "./contactForm/ContactFormShow";
import { AppUserList } from "./appUser/AppUserList";
import { AppUserCreate } from "./appUser/AppUserCreate";
import { AppUserEdit } from "./appUser/AppUserEdit";
import { AppUserShow } from "./appUser/AppUserShow";
import { OurTeamList } from "./ourTeam/OurTeamList";
import { OurTeamCreate } from "./ourTeam/OurTeamCreate";
import { OurTeamEdit } from "./ourTeam/OurTeamEdit";
import { OurTeamShow } from "./ourTeam/OurTeamShow";
import { HeroSliderList } from "./heroSlider/HeroSliderList";
import { HeroSliderCreate } from "./heroSlider/HeroSliderCreate";
import { HeroSliderEdit } from "./heroSlider/HeroSliderEdit";
import { HeroSliderShow } from "./heroSlider/HeroSliderShow";
import { TestimonialList } from "./testimonial/TestimonialList";
import { TestimonialCreate } from "./testimonial/TestimonialCreate";
import { TestimonialEdit } from "./testimonial/TestimonialEdit";
import { TestimonialShow } from "./testimonial/TestimonialShow";
import { ContactDetailsList } from "./contactDetails/ContactDetailsList";
import { ContactDetailsCreate } from "./contactDetails/ContactDetailsCreate";
import { ContactDetailsEdit } from "./contactDetails/ContactDetailsEdit";
import { ContactDetailsShow } from "./contactDetails/ContactDetailsShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { ProjectMediaList } from "./projectMedia/ProjectMediaList";
import { ProjectMediaCreate } from "./projectMedia/ProjectMediaCreate";
import { ProjectMediaEdit } from "./projectMedia/ProjectMediaEdit";
import { ProjectMediaShow } from "./projectMedia/ProjectMediaShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PortfolioWebsiteService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Skill"
          list={SkillList}
          edit={SkillEdit}
          create={SkillCreate}
          show={SkillShow}
        />
        <Resource
          name="ContactForm"
          list={ContactFormList}
          edit={ContactFormEdit}
          create={ContactFormCreate}
          show={ContactFormShow}
        />
        <Resource
          name="AppUser"
          list={AppUserList}
          edit={AppUserEdit}
          create={AppUserCreate}
          show={AppUserShow}
        />
        <Resource
          name="OurTeam"
          list={OurTeamList}
          edit={OurTeamEdit}
          create={OurTeamCreate}
          show={OurTeamShow}
        />
        <Resource
          name="HeroSlider"
          list={HeroSliderList}
          edit={HeroSliderEdit}
          create={HeroSliderCreate}
          show={HeroSliderShow}
        />
        <Resource
          name="Testimonial"
          list={TestimonialList}
          edit={TestimonialEdit}
          create={TestimonialCreate}
          show={TestimonialShow}
        />
        <Resource
          name="ContactDetails"
          list={ContactDetailsList}
          edit={ContactDetailsEdit}
          create={ContactDetailsCreate}
          show={ContactDetailsShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="ProjectMedia"
          list={ProjectMediaList}
          edit={ProjectMediaEdit}
          create={ProjectMediaCreate}
          show={ProjectMediaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
