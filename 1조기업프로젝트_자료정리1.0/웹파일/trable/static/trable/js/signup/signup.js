function previousStep(stepNumber) {
    // 현재 단계 숨기기
    var currentStep = document.querySelector('.step:not([style*="display: none"])');
    if (currentStep) {
        currentStep.style.display = "none";
    }

    // 이전 단계 보이기
    var previousStep = document.querySelector('#step' + stepNumber);
    if (previousStep) {
        previousStep.style.display = "block";
    }
}

function nextStep(stepNumber) {
    // 현재 단계 숨기기
    var currentStep = document.querySelector('.step:not([style*="display: none"])');
    if (currentStep) {
        currentStep.style.display = "none";
    }

    // 선택한 단계 보이기
    var nextStep = document.querySelector('#step' + stepNumber);
    if (nextStep) {
        nextStep.style.display = "block";
    }

    // step3에서 step4로 이동했을 때 추가 작업 수행
    if (stepNumber === 4) {
        // 회원가입 완료 동작 수행
        window.location.href = "http://127.0.0.1:8000/trable/";
    }
}
