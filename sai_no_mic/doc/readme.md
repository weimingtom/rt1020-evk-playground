Overview
========
The SAI Demo application demonstrates complicated digital audio playback and record case. The demo provide these features below:
1. Duplex audio transfer, record and playback at same time.
2. Playback a 250 Hz sine wave data generated by CMSIS-DSP library. Also compute the fundamental frequency using Fast Fourier Transform with CMSIS-DSP library.
If the board support sdcard, then the case can demo an extra items
3.Record to SDcard, then playback it

SDK version
===========
- Version: 2.16.000

Toolchain supported
===================
- Keil MDK  5.39.0
- GCC ARM Embedded  13.2.1
- MCUXpresso  11.10.0
- IAR embedded Workbench  9.60.1

Hardware requirements
=====================
- Mini/micro USB cable
- EVK-MIMXRT1020 board
- Personal Computer
- Headphone

Board settings
==============
Please insert the SDCARD into card slot(J15), make sure C28 is welded.

Prepare the Demo
================
1.  Connect a USB cable between the host PC and the OpenSDA USB port on the target board.
2.  Open a serial terminal with the following settings:
    - 115200 baud rate
    - 8 data bits
    - No parity
    - One stop bit
    - No flow control
3.  Download the program to the target board.
4. Insert the headphones into the headphone jack on EVK-MIMXRT1020 board.
5. Either press the reset button on your board or launch the debugger in your IDE to begin running the demo.

Running the demo
================

This following section shows how to run the demo:
Notice, on EVK-MIMXRT1020 board, the audio record source is from two microphones. The left channel is from
the headphone microphone, the right channel from the main microphone on board. It is OK for you to choose one
of them or both.
As the headphone microphone may have headphone standard differernt issue, you can just use main microphone
on board as input source.

Please note that the log print out may be different according to the different card,
If the card doesn't been formatted ,the case will making new file system and below log will be printed,
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
SAI Demo started!
Please insert a card into board.

Card inserted.

Make file system......The time may be long if the card capacity is big.

Create directory......
Please choose the option :
1. Record and playback at same time
2. Playback sine wave
3. Record to SDcard, after record playback it
4. Quit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If the card is formatted already, the case will mount the file system only, the case will print below log,
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
SAI Demo started!
Please insert a card into board.

Card inserted.

Mount volume Successfully.

Create directory......
Please choose the option :
1. Record and playback at same time
2. Playback sine wave
3. Record to SDcard, after record playback it
4. Quit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Note:
To debug in qspiflash, following steps are needed:
1. Select the flash target and compile.
2. Set the SW8: 1 off 2 off 3 on 4 off, then power on the board and connect USB cable to J23.
3. Start debugging in IDE.
   - Keil: Click "Download (F8)" to program the image to qspiflash first then clicking "Start/Stop Debug Session (Ctrl+F5)" to start debugging.