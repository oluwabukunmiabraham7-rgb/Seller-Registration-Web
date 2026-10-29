import { auth, db } from './firebase.js';
import { createUserWithEmailAndPassword, updateProfile } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { doc, setDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
const $=id=>document.getElementById(id), form=$('applyForm'), msg=$('message'), btn=$('submitBtn');
function show(text,type='info'){msg.textContent=text;msg.className=`notice ${type}`;}
form.addEventListener('submit',async e=>{e.preventDefault();btn.disabled=true;btn.textContent='Submitting application…';
 try { const shopName=$('shopName').value.trim(), fullName=$('fullName').value.trim(), email=$('email').value.trim().toLowerCase(), phone=$('phone').value.trim(), category=$('category').value, description=$('description').value.trim();
 const cred=await createUserWithEmailAndPassword(auth,email,$('password').value); await updateProfile(cred.user,{displayName:fullName});
 const profile={uid:cred.user.uid,role:'seller',sellerStatus:'pending',shopName,fullName,email,phone,category,description,createdAt:serverTimestamp()};
 await setDoc(doc(db,'users',cred.user.uid),profile);
 await setDoc(doc(db,'sellerApplications',cred.user.uid),{uid:cred.user.uid,shopName,fullName,email,phone,category,description,status:'pending',createdAt:serverTimestamp()});
 form.reset(); show('Application submitted. Your account is pending approval. You cannot upload products until the MARKET EXPRESS administrator approves it. Keep your login details private.','success');
 } catch(err){console.error(err); let t='Could not submit your application. Please try again.'; if(err.code==='auth/email-already-in-use')t='This email already has an account. Sign in on the seller dashboard or contact the administrator.'; else if(err.code==='permission-denied')t='Firebase rules blocked the application. Publish the matching multi-vendor Firestore rules from the ZIP guide.'; else if(err.code==='auth/weak-password')t='Choose a password with at least 8 characters.'; show(t,'error'); }
 finally{btn.disabled=false;btn.textContent='Submit seller application';}
});