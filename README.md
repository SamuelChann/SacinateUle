# Setup Instructions

## Prerequisites

1. **Generate and trust MitM certificate** in your "VPN & Device Management"
2. **Add hostname** `*.ulearning.cn` to MitM Hostnames

## Rewrite Rules Configuration

### Rule 1: Start Exam Script
- **Type**: `script-response-body`
- **URL**: `apps.ulearning.cn/exam/startExam`
- **Optional Headers to Match**: (leave blank)
- **Script**: `startExam.js` (from this repository)

### Rule 2: Behavior Trace Script
- **Type**: `script-request-body`
- **URL**: `utestapi.ulearning.cn/exams/setBehaviorTrace`
- **Optional Headers to Match**: `^POST`
- **Script**: `setBehaviorTrace.js` (from this repository)

## Security Configuration
For security purposes, abnormal status reports (screen captures and screenshots sent to teachers) need to be intercepted locally. Add rejection rules for the three URLs using the same method described above. The URLs that need to be rejected in specific cases are detailed in QX.conf.
