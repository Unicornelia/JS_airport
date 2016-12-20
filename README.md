# Airport Challenge
=================

Description of the airport app
-------

A software to control the flow of planes at an airport. The planes can land and take off provided that the weather is sunny. Occasionally it may be stormy, in which case no planes can land or take off. The app has the following additional features:


* A plane to land at an airport (can also be confirmed)

* From the airport the plane can be instructed to take off (can also be confirmed)

* No takeoff or landing when the weather is stormy

* No landing when the airport is full

* The software can be used for many different airports, capacity of the airport can be modified


Completed tasks
---------------

Features that are implemented:

 * Plane status
 * Plane landing
 * Plane takeoff
 * Full airport cannot land planes
 * Empty airport cannot authorize a plane to take off
 * Variable and default capacity
 * Airport has to handle weather information and stop planes from taking off or landing when the weather is stormy
 * Planes that landed cannot land again
 * Planes that are flying cannot be at airport

Technologies used:
-----------------
- JavaScript
- Jasmine

How to use app:
---------------
- This is a console app, load SpecRunner.html in Browser, hit ```cmd + alt + J``` and create objects, observe their interaction
