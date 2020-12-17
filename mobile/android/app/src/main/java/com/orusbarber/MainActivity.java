package com.orusbarber;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

 @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }

  @Override
  protected String getMainComponentName() {
    return "orusbarber";
  }
}
