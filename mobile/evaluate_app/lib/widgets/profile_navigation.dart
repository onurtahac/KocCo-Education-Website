import 'package:flutter/material.dart';
import 'package:evaluate_app/pages/profile.dart';
import 'package:evaluate_app/pages/profile_details.dart';

class Profile extends StatefulWidget {
  const Profile({super.key});

  @override
  ProfileState createState() => ProfileState();
}

GlobalKey<NavigatorState> profileNavigatorKey = GlobalKey<NavigatorState>();

class ProfileState extends State<Profile> {
  @override
  Widget build(BuildContext context) {
    return Navigator(
      key: profileNavigatorKey,
      onGenerateRoute: (RouteSettings settings) {
        return MaterialPageRoute(
            settings: settings,
            builder: (BuildContext context) {
              if (settings.name == "/detailsProfile") {
                return ProfileDetails();
              }
              return ProfilePage();
            });
      },
    );
  }
}
