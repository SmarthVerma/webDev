@echo off
cd %~dp0
set fastboot=bin\windows\fastboot.exe
if not exist %fastboot% echo %fastboot% not found. & pause & exit /B 1
echo Waiting for device...
set device=unknown
for /f "tokens=2" %%D in ('%fastboot% getvar product 2^>^&1 ^| findstr /l /b /c:"product:"') do set device=%%D
if "%device%" neq "pissarro" if "%device%" neq "pissarropro" if "%device%" neq "pissarroin" if "%device%" neq "pissarroinpro" echo Compatible devices: pissarro, pissarropro, pissarroin, pissarroinpro & echo Your device: %device% & pause & exit /B 1

echo You are going to wipe your data and internal storage.
echo It will delete all your files and photos stored on internal storage.
set /p choice=Do you agree? (Y/N) 
if /i "%choice%" neq "y" exit /B 0

echo ##################################################################
echo Please wait. The device will reboot when installation is finished.
echo ##################################################################
%fastboot% set_active a
%fastboot% flash preloader_ab images\preloader_raw.img
%fastboot% flash spmfw_ab images\spmfw.img
%fastboot% flash dpm_ab images\dpm.img
%fastboot% flash mcupm_ab images\mcupm.img
%fastboot% flash gz_ab images\gz.img
%fastboot% flash md1img_ab images\md1img.img
%fastboot% flash lk_ab images\lk.img
%fastboot% flash vbmeta_system_ab images\vbmeta_system.img
%fastboot% flash tee_ab images\tee.img
%fastboot% flash scp_ab images\scp.img
%fastboot% flash cam_vpu3_ab images\cam_vpu3.img
%fastboot% flash vbmeta_ab images\vbmeta.img
%fastboot% flash cam_vpu1_ab images\cam_vpu1.img
%fastboot% flash vbmeta_vendor_ab images\vbmeta_vendor.img
%fastboot% flash pi_img_ab images\pi_img.img
%fastboot% flash dtbo_ab images\dtbo.img
%fastboot% flash cam_vpu2_ab images\cam_vpu2.img
%fastboot% flash sspm_ab images\sspm.img
%fastboot% flash audio_dsp_ab images\audio_dsp.img
%fastboot% flash boot_ab images\boot.img
%fastboot% flash cust images\cust.img
%fastboot% flash super images\super.img
%fastboot% erase metadata
%fastboot% erase userdata
%fastboot% erase expdb
%fastboot% oem cdms
%fastboot% reboot
