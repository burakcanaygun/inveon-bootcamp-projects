using System;
using System.Collections.Generic;

namespace ElectronicDeviceOOP
{
    internal static class Program
    {
        private static void Main()
        {
            // Create a list of devices
            var devices = new List<Device> { new Laptop(), new Smartphone() };
            foreach (var device in devices)
            {
                // Show all device information
                Console.WriteLine("---");
                Console.WriteLine(device.GetType().Name);
                device.Create();
                Console.WriteLine("---");
            }
        }
    }
}